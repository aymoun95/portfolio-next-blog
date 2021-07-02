import { Box, Flex } from "@chakra-ui/layout";
import { tagColor } from "../../utils/tagColor";
import TagComponent from "../custom/Tag";

export default function FilterTags({ handleTagClick, searchValue }) {
  const handleClick = (tag) => {
    if (searchValue.length !== 0) {
      const searchArray = searchValue.split(" ");
      if (searchArray.includes(tag)) {
        handleTagClick(searchArray.filter((t) => t !== tag).join(" "));
      } else {
        handleTagClick([...searchArray, tag].join(" "));
      }
    } else {
      handleTagClick(tag);
    }
  };
  return (
    <Flex
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      paddingBlock={5}
    >
      {Object.keys(tagColor).map((tag, index) => {
        const color = tagColor[tag];
        return (
          <Box key={index}>
            <TagComponent
              color={color}
              onClick={() => {
                handleClick(tag);
              }}
            >
              {tag}
            </TagComponent>
          </Box>
        );
      })}
    </Flex>
  );
}
