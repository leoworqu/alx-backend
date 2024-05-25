#!/usr/bin/env python3
"""a class LFUCache that inherits from BaseCaching
and is a caching system:
"""


BaseCaching = __import__('base_caching').BaseCaching


class LFUCache(BaseCaching):
    """LFUcaching function
    """
    def __init__(self):
        """init function
        """
        super().__init__()
        self.frequency = {}

    def update_frequency(self, key):
        """update_frequency function
        """
        if key in self.frequency:
            self.frequency[key] += 1
        else:
            self.frequency[key] = 1

    def put(self, key, item):
        """put function
        """
        if key is None or item is None:
            return

        # Update frequency
        self.update_frequency(key)

        if len(self.cache_data) >= self.MAX_ITEMS:
            # Find least frequency used item(s)
            min_frequency = min(self.frequency.values())
            least_frequent_keys = [k for k, v in self.frequency.items() if v == min_frequency]

            # If more than one least frequent keys found, use LRU
            if len(least_frequent_keys) > 1:
                least_recently_used_key = min(self.cache_data, key=lambda k: self.cache_data[k])
                print("DISCARD:", least_recently_used_key)
                del self.cache_data[least_recently_used_key]
                del self.frequency[least_recently_used_key]
            else:
                least_frequent_key = least_frequent_keys[0]
                print("DISCARD:", least_frequent_key)
                del self.cache_data[least_frequent_key]
                del self.frequency[least_frequent_key]

        self.cache_data[key] = item

    def get(self, key):
        """get function
        """
        if key is None or key not in self.cache_data:
            return None

        self.update_frequency(key)

        return self.cache_data[key]
