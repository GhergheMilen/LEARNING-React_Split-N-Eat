import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <main className="app">
      <aside className="sidebar">
        <FriendsList></FriendsList>
        {showAddFriend && <FormAddFriend></FormAddFriend>}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </aside>
      <FormSplitBill></FormSplitBill>
    </main>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />

      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You own {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owns you ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>You are even with {friend.name}</p>}

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="">Friend name </label>
      <input type="text" />
      <label htmlFor="">Image URL</label>
      <input type="text" name="" id="" />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with {}</h2>

      <label htmlFor="">Bill value</label>
      <input type="text" name="" id="" />
      <label htmlFor="">Your expense </label>
      <input type="text" name="" id="" />
      <label htmlFor="">{} expense</label>
      <input type="text" name="" id="" disabled />
      <label htmlFor="">Who is paying the bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">{}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
