import { BubbleSort } from "./sortFunctions/BubbleSort";
import { SelectionSort } from "./sortFunctions/SelectionSort";
import { InsertionSort } from "./sortFunctions/InsertionSort";
import { QuickSort } from "./sortFunctions/QuickSort";
import { HeapSort } from "./sortFunctions/HeapSort.js";
import { MergeSort } from "./sortFunctions/MergeSort";

export const sortingAlgorithms = [
  { component: BubbleSort, title: "Bubble", name: "Bubble Sort" },
  { component: SelectionSort, title: "Selection", name: "Selection Sort" },
  { component: InsertionSort, title: "Insertion", name: "Insertion Sort" },
  { component: HeapSort, title: "Heap", name: "Heap Sort" },
  { component: MergeSort, title: "Merge", name: "Merge Sort" },
  { component: QuickSort, title: "Quick", name: "Quick Sort" },
];