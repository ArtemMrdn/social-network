import React from "react";
import Paginator from "../common/Paginator/Paginator.tsx";
import User from "./User.tsx";
import { UserType } from "../../types/types";
import UsersSearchForm from "./UsersSearchForm.tsx";
import { FilterType } from "../../redux/users-reducer.js";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  onFilterChanged: (filter: FilterType) => void;
  onPageChanged: (pageNumber: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

let Users: React.FC<PropsType> = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <UsersSearchForm onFilterChanged={props.onFilterChanged} />
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
