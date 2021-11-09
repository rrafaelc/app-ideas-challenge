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
`;

	return text ? (
		<div dangerouslySetInnerHTML={getMarkdown(text)} />
	) : (
		<>
			<div dangerouslySetInnerHTML={getMarkdown(markdownGuideText)} />
			<a
				href='https://www.markdownguide.org/basic-syntax/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Markdown Guide: Basic Syntax
			</a>
		</>
	);
};
