from ast import If
from cgitb import reset
from math import ceil
from typing import List
import unittest


def merge_sort(nums: List):
    def merge(listA: List, listB: List):
        result = []
        while len(listA) > 0 or len(listB) > 0:
            if len(listA) == 0 or len(listB) == 0:
                return result + listA + listB
            if listA[0] < listB[0]:
                result.append(listA.pop(0))
            else:
                result.append(listB.pop(0))

    if len(nums) == 1:
        return nums

    middleIndex = ceil(len(nums) / 2)
    return merge(merge_sort(nums[:middleIndex]), merge_sort(nums[middleIndex:]))


class TestMergeSort(unittest.TestCase):
    def test_merge_sort(self):
        nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
        result = merge_sort(nums)
        self.assertEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], result)


if __name__ == '__main__':
    unittest.main()
