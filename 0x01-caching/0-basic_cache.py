#!/usr/bin/env python3
"""
A class BasicCache that inherits from
BaseCaching and is a caching system:
"""


BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """
    basic cache function
    """

    def __init__(self):
        """
        init base cacheing
        """
        super().__init__()

    def put(self, key, item):
        """put function using key and item
        """
        if key is None or item is None:
            pass
        else:
            self.cache_data[key] = item

    def get(self, key):
        """get function using key
        """
        if key is None or key not in self.cache_data.keys():
            return None
        return self.cache_data.get(key)
