import { Box, Flex } from "@chakra-ui/layout";
import { tagColor } from "../../utils/tagColor";
import TagComponent from "../custom/Tag";

export default function FilterTags({ handleTagClick, selectedTags }) {
  const handleClick = (tag) => {
    if (selectedTags.includes(tag)) {
      handleTagClick(selectedTags.filter((t) => t !== tag));
    } else {
      handleTagClick([...selectedTags, tag]);
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
