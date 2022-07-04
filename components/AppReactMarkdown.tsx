import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";

interface Props {
  children: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export const AppReactMarkdown = ({ children }: Props) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...props }) => {
          if (!href) return <a {...props}></a>;

          if (href.charAt(0) !== "/") {
            return <a {...props} rel="noopener noreferrer"></a>;
          }

          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        },
        ul: (props) => {
          return <ul className="list-disc" {...props}></ul>;
        },
      }}
    />
  );
};
