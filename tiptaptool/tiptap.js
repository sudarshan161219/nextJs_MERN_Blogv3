import Heading from "@tiptap/extension-heading";
import Blockquote from "@tiptap/extension-blockquote";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Dropcursor from "@tiptap/extension-dropcursor";
import FontFamily from "@tiptap/extension-font-family";
import HardBreak from "@tiptap/extension-hard-break";
import Highlight from "@tiptap/extension-highlight";
import History from "@tiptap/extension-history";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import Strike from "@tiptap/extension-strike";
import Subscript from "@tiptap/extension-subscript";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Youtube from '@tiptap/extension-youtube'

const lowlight = createLowlight(common);

export {
  Heading,
  Blockquote,
  Document,
  Paragraph,
  Text,
  Bold,
  BulletList,
  ListItem,
  Code,
  CodeBlock,
  CodeBlockLowlight,
  lowlight,
  Color,
  TextStyle,
  Dropcursor,
  FontFamily,
  HardBreak,
  Highlight,
  History,
  HorizontalRule,
  Image,
  OrderedList,
  Italic,
  Link,
  Strike,
  Subscript,
  Underline,
  TextAlign,
};
