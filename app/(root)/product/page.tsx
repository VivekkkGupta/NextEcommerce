const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  return <>{slug}</>;
};

export default ProductDetailsPage;
