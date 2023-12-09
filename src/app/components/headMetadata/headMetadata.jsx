export default function HeadMetadata({ title, description }) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </head>
  );
}
