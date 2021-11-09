import marked from 'marked';

type MarkdownProps = {
	text: string;
};

export const Markdown = ({ text }: MarkdownProps) => {
	const getMarkdown = (rawText: string) => {
		const rawMarkup = marked(rawText);
		return { __html: rawMarkup };
	};

	const markdownGuideText = `
**Don't know how to write in markdown?**\n
[Markdown Guide: Basic Syntax](https://www.markdownguide.org/basic-syntax/)\n
*Writing in plain text is also valid.*
  `;

	return text ? (
		<div dangerouslySetInnerHTML={getMarkdown(text)} />
	) : (
		<div dangerouslySetInnerHTML={getMarkdown(markdownGuideText)} />
	);
};
