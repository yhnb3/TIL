import React from "react";

function UserGreeting({ name, count }) {
  return (
    <h1>
      {name && name + ","} welcome {Boolean(count) && `It's ${count} time`}
    </h1>
  );
}

function GuestGreeting() {
  return <h1>please sign up</h1>;
}
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <UserGreeting count={0} /> : <GuestGreeting />;
}

export default function Condtion() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
