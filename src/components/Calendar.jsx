/* eslint-disable react/prop-types */
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useState } from "react";
import ExpectedDeliveryModal from "./modals/ExpectedDeliveryModal";

const Calendar = ({ pendingOrders }) => {
  const [showExpectedDeliverys, setShowExpectedDeliverys] = useState(false);
  const [dateToShowDeliverys, setDateToShowDeliverys] = useState("");
  const today = startOfToday();
  const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const [currentMonth, setCurrentMonth] = useState(() =>
    format(today, "MMM-yyyy")
  );

  let firstDayOfMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(endOfMonth(firstDayOfMonth)),
  });

  const getPrevMonth = () => {
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrentMonth(format(firstDayOfPrevMonth, "MMM-yyyy"));
  };

  const getNextMonth = () => {
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrentMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  return (
    <div className="p-8 flex items-center justify-center">
      <div className="">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-xl">
            {format(firstDayOfMonth, "MMMM yyyy")}
          </p>
          <div className="flex items-center justify-evenly gap-6 sm:gap-12">
            <FaChevronLeft
              className="w-6 h-6 cursor-pointer"
              onClick={getPrevMonth}
            />
            <FaChevronRight
              className="w-6 h-6 cursor-pointer"
              onClick={getNextMonth}
            />
          </div>
        </div>
        <hr className="my-6" />
        <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
          {days.map((day, idx) => {
            return (
              <div key={idx} className="font-semibold capitalize">
                {day}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-7 gap-6 sm:gap-12 mt-8 place-items-center">
          {daysInMonth.map((day, idx) => {
            return (
              <div key={idx} className={``}>
                <p
                  className={`cursor-pointer flex items-center justify-center font-semibold h-8 w-8 rounded-full  hover:text-white ${
                    isSameMonth(day, today) ? "text-gray-900" : "text-gray-400"
                  } ${!isToday(day) && "hover:bg-blue-500"} ${
                    isToday(day) && "bg-red-500 text-white"
                  }`}
                  onClick={() => {
                    setShowExpectedDeliverys(!showExpectedDeliverys);
                    setDateToShowDeliverys(format(day, "dd/MM/yyyy"));
                  }}
                >
                  {format(day, "d")}
                </p>
                <div className="h-[28px] overflow-hidden">
                  {pendingOrders.map((order) => {
                    if (
                      order.expectedDeliveryDate === format(day, "dd/MM/yyyy")
                    ) {
                      return (
                        <div
                          key={order.orderId}
                          className="px-2 py-1 my-0.5 w-fit text-xs bg-amber-500 rounded-md"
                        >
                          <p className="truncate w-[40px] md:w-[60px] lg:w-[70px]">
                            {order.orderId} {order.customerName}
                          </p>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {showExpectedDeliverys && (
        <ExpectedDeliveryModal
          setShowModal={setShowExpectedDeliverys}
          date={dateToShowDeliverys}
          pendingOrders={pendingOrders}
        />
      )}
    </div>
  );
};

export default Calendar;
