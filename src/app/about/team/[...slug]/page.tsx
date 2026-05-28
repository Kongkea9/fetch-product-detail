type ParamType = {
  params: Promise<{ slug: string }>;
};

export default async function EachMemberPage({ params }: ParamType) {
  const { slug } = await params;
  return <div>My Post: {slug}</div>;
}
