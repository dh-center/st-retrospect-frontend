/**
 * Block with location instance id to which the user should come
 */
export interface LocationInstanceBlock {
  type: 'locationInstance';
  data: {
    /**
     * Location instance id to which the user should come
     */
    locationInstanceId: string;
  }
}

/**
 * Text paragraph block data
 */
export interface ParagraphBlock {
  type: 'paragraph';
  data: {
    /**
     * Paragraph text
     */
    text: string;
  }
}

/**
 * All quest blocks
 */
export type QuestBlock =
  | LocationInstanceBlock
  | ParagraphBlock;
