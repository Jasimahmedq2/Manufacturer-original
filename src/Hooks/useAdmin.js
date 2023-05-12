import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  console.log("isAdmin", admin)
  const [adminLoading, setAdminLoading] = useState(true);
  const email = user?.email;
  console.log("email", email)

  useEffect(() => {
    const LoadData = async () => {
      const { data } = await axios.get(
        `https://dull-puce-basket-clam-sari.cyclic.app/user/admin/${email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("data here", data);
      setAdmin(data.admin);
      setAdminLoading(false);
    };
    LoadData();
  }, [user]);
  return [admin, adminLoading];
};
export default useAdmin;