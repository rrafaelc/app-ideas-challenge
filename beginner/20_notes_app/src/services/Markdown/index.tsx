import marked from 'marked';
import styled from 'styled-components';

const Container = styled.div`
	a {
		text-decoration: none;
		transition: all 0.2s;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const Link = styled.a`
	text-decoration: none;
	transition: all 0.2s;

	&:hover {
		text-decoration: underline;
	}
`;

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
		<Container dangerouslySetInnerHTML={getMarkdown(text)} />
	) : (
		<>
			<Container dangerouslySetInnerHTML={getMarkdown(markdownGuideText)} />
			<Link
				href='https://www.markdownguide.org/basic-syntax/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Markdown Guide: Basic Syntax
			</Link>
		</>
	);
};
