import ExpenseItem from "../Expenses/ExpenseItem";

export const ExpenseDataShow = ({ show }) => {
  return (
    <>
      {show?.map((item) => {
        return (
          <>
            <ExpenseItem
             key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
              location={item.location}
            />
          </>
        );
      })}
    </>
  );
};
