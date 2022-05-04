import unittest


def bubble_sort(nums):
    swapped = True
    while swapped:
        swapped = False
        for i in range(0, len(nums) - 1):
            temp = nums[i]
            if nums[i] > nums[i+1]:
                nums[i] = nums[i+1]
                nums[i+1] = temp
                swapped = True
    return nums


class TestBubbleSort(unittest.TestCase):
    def test_bubble_sort(self):
        nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
        sorted_nums = bubble_sort(nums)
        self.assertEqual(nums, sorted_nums)


if __name__ == '__main__':
    unittest.main()
