from typing import List
import unittest


def quick_sort(nums: List):
    if len(nums) <= 1:
        return nums

    left = []
    pivot = nums.pop()
    right = []

    for num in nums:
        if num < pivot:
            left.append(num)
        else:
            right.append(num)

    return quick_sort(left) + [pivot] + quick_sort(right)


class TestQuickSort(unittest.TestCase):
    def test_quick_sort(self):
        nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
        result = quick_sort(nums)
        self.assertEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], result)


if __name__ == '__main__':
    unittest.main()
