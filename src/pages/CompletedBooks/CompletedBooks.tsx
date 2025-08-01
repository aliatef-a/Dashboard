import BooksAreaChart from "../../components/SendBooksComponents/BooksAreaChart";
import Breadcrumb from "../../components/shared/Bredcrumb";
import TableComponents from "../../components/shared/TableComponents";

function CompletedBooks() {
  return (
    <section>
      <div className="container-page">
        <Breadcrumb items={[{ label: "الكتب المنجزة" }]} />
        <div className="start-section">
          <BooksAreaChart />
        </div>
        <div className="start-section">
          <TableComponents
            pathNavigate="/completed-books"
            rowsPerPageTable={10}
          />
        </div>
      </div>
    </section>
  );
}

export default CompletedBooks;
