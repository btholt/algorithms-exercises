from typing import List
import unittest


def insertion_sort(nums: List):
    for i in range(1, len(nums)):
        numberToInsert = nums[i]
        for j in range(i, -1, -1):
            if nums[j] < nums[j - 1] and j > 0:
                temp = nums[j-1]
                nums[j - 1] = nums[j]
                nums[j] = temp
            else:
                break


class TestInsertionSort(unittest.TestCase):
    def test_insertion_sort(self):
        nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
        insertion_sort(nums)
        self.assertEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], nums)


if __name__ == '__main__':
    unittest.main()
