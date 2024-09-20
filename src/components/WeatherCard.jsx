export default function WeatherCard(props) {
  const { data } = props;

  return (
    <div>
      <p>{data?.address}</p>
      <p>{data?.description}</p>
    </div>
  );
}
