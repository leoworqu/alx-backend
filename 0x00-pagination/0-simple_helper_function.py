#!/usr/bin/env python3
"""
function named index_range that takes two integer args page and page_size
return a tuple of size two containing a start index and an end index
"""


def index_range(page, page_size):
    """
    return a tuple of size two containing a start index and an end index
    """
    if page < 1 or page_size < 1:
        return None
    
    start_index = (page - 1) * page_size
    end_index = start_index + page_size - 1
    
    return start_index, end_index
