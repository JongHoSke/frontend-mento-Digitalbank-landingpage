import type { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
};
const PostsLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default PostsLayout;
