import withPageAuthRequired from "../../components/auth/withPageAuthRequired"

const DashboardIndex = () => {
  return <div>
    Dashboard
  </div>;
};

export default withPageAuthRequired(DashboardIndex);