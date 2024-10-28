import asyncio
import threading
from functools import wraps
from typing import Awaitable
from typing import Callable
from typing import TypeVar

_loop = asyncio.new_event_loop()

_thr = threading.Thread(target=_loop.run_forever, name="Async Runner", daemon=True)

TA = TypeVar("TA")

# def async_to_sync(awaitable: Awaitable[TA]) -> TA:
#     try:
#         loop = asyncio.get_running_loop()
#         # we are in sync context but inside a running loop
#         logging.info("loop", loop)
#         if not _thr.is_alive():
#             logging.info("start loop", loop)
#             _thr.start()
#         future = asyncio.run_coroutine_threadsafe(awaitable, _loop)
#         return future.result()
#     except RuntimeError as e:
#         logging.info("RuntimeError", e)
#         logging.info("creating new loop")
#         new_loop = asyncio.new_event_loop()
#         asyncio.set_event_loop(new_loop)
#         try:
#             return new_loop.run_until_complete(awaitable)
#         finally:
#             new_loop.close()


def async_to_sync(awaitable: Awaitable[TA]) -> TA:
    try:
        loop = asyncio.get_running_loop()
        # we are in sync context but inside a running loop
        print("loop", loop)

        if not loop.is_running():
            print("loop is not running", loop)
            new_loop = asyncio.new_event_loop()
            asyncio.set_event_loop(new_loop)
            try:
                return new_loop.run_until_complete(awaitable)
            finally:
                new_loop.close()

        future = asyncio.run_coroutine_threadsafe(awaitable, _loop)
        return future.result()

    except RuntimeError as e:
        print("RuntimeError, creating new_event_loop", e)
        new_loop = asyncio.new_event_loop()
        asyncio.set_event_loop(new_loop)
        try:
            return new_loop.run_until_complete(awaitable)
        finally:
            new_loop.close()


def sync_api(f: Callable[..., Awaitable[TA]]) -> Callable[..., TA]:
    @wraps(f)
    def sync_call(*args, **kwargs):
        return async_to_sync(f(*args, **kwargs))

    return sync_call
