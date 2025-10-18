export const ChartView = ({ csv }) => {
  return (
    <section className="container block">
      <h2 className="subtitle">Chart</h2>
      <div className="chartPreview">
        <div>
          { csv || 'Here will be the chart'}
        </div>
      </div>
    </section>
  );
};
