import { Avatar, Dropdown } from "flowbite-react";
import useMe from "./useMe";
import { useEffect } from "react";

export default function UserDropdown() {
  const { isLoading, isError, data: user, logout } = useMe();

  useEffect(() => {
    if (!isLoading && isError) {
      logout();
    }
  }, [isLoading, isError]);

  return (
    <div className="flex md:order-2">
      {!isLoading && !isError && (
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={user.image} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">{user.name}</span>
            <span className="block truncate text-sm font-medium">
              {user.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      )}
    </div>
  );
}
