 const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list! 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to take off ✈️"
          : `💼 You have ${numItems} items packed, and you have already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;