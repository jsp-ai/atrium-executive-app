import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { expandWikilinks } from "@/lib/wiki";

export default function MarkdownBody({
  body,
  linkBase = "/wiki/",
}: {
  body: string;
  linkBase?: string;
}) {
  const expanded = expandWikilinks(body, linkBase);
  return (
    <div className="prose-atrium text-[15px] leading-[1.75] text-ink-soft space-y-[18px]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="font-display text-[34px] leading-[1.1] tracking-[-0.01em] font-normal text-ink mb-6 mt-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-display text-[22px] leading-[1.2] tracking-[-0.005em] font-normal text-ink mt-10 mb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-display text-[17px] leading-[1.3] font-normal text-ink mt-7 mb-2">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="mb-[18px]">{children}</p>,
          strong: ({ children }) => <strong className="text-ink font-medium">{children}</strong>,
          em: ({ children }) => (
            <em className="font-display italic text-ink">{children}</em>
          ),
          blockquote: ({ children }) => <blockquote className="pull">{children}</blockquote>,
          ul: ({ children }) => <ul className="space-y-2 my-4 ml-2">{children}</ul>,
          li: ({ children }) => (
            <li className="text-[15px] leading-[1.6] before:content-['—'] before:text-mute-soft before:mr-2">
              {children}
            </li>
          ),
          a: ({ href, children }) => {
            const isInternal = href?.startsWith("/");
            if (isInternal && href) {
              return (
                <Link
                  href={href}
                  className="text-copper border-b border-dotted border-copper-soft hover:border-copper transition-colors"
                >
                  {children}
                </Link>
              );
            }
            return (
              <a href={href} className="text-copper border-b border-dotted border-copper-soft hover:border-copper">
                {children}
              </a>
            );
          },
          code: ({ children }) => (
            <code className="font-mono text-[13px] bg-paper-card px-1.5 py-0.5 text-ink">{children}</code>
          ),
          hr: () => <hr className="border-rule my-8" />,
        }}
      >
        {expanded}
      </ReactMarkdown>
    </div>
  );
}
