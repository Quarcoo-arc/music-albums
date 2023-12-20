import React, { Dispatch, SetStateAction } from "react";
import { SafeAreaView } from "react-native";
import { SegmentedButtons } from "react-native-paper";

type Props = {
  count: number;
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
  itemsPerPage: number;
};

const Pagination = ({ count, pageNum, setPageNum, itemsPerPage }: Props) => {
  return (
    <SafeAreaView className="flex-1 items-center my-4">
      <SegmentedButtons
        value={pageNum.toString()}
        onValueChange={(value) => setPageNum(+value)}
        buttons={Array(count / itemsPerPage)
          .fill(1)
          .map((_, idx) => ({
            value: (idx + 1).toString(),
            label: (idx + 1).toString(),
            accessibilityLabel: `Page ${idx + 1}`,
          }))}
      />
    </SafeAreaView>
  );
};

export default Pagination;
