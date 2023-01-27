interface Props {
  id: number;
  startDate: string;
  endDate: string;
  detail: string;
}

export default function News({ startDate, endDate, detail }: Props) {
  return (
    <article>
      {startDate} {endDate} {detail}
    </article>
  );
}
