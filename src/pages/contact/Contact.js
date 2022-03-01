import { useEffect, useRef, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { contactAction } from "../../actions/DataAction";

import Sidebar from "../../comps/sidebar";

const Contact = () => {
  const { ContactRed } = useSelector((state) => {
    return state;
  });
  const [contact, setContact] = useState(ContactRed);
  const contactHandler = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const dispatch = useDispatch();
  const submitContact = () => {
    dispatch(contactAction(contact));
  };
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className="center-div">
      <div className="form center-div">
        <div>
          <div className="center-div">
            <div>
              <h1>Tell us about Yourself</h1>
              <p>With this info, recruiters will be able to find you.</p>
            </div>
          </div>
          <div>
            <label htmlFor="">Name</label>
            <br />
            <input
              type="text"
              name="Name"
              className="full"
              ref={ref}
              onChange={(e) => {
                contactHandler(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <br />
            <input
              type="text"
              name="Email"
              className="half"
              onChange={(e) => {
                contactHandler(e);
              }}
            />
            <input type="checkbox" /> Don't Show on my Resume
          </div>
          <div>
            <label htmlFor="">Address</label>
            <br />
            <input
              type="text"
              name="Address"
              className="full"
              onChange={(e) => {
                contactHandler(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="">City</label>
            <br />
            <input
              type="text"
              name="City"
              className="half"
              onChange={(e) => {
                contactHandler(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Country</label>
            <br />
            <input
              type="text"
              name="Country"
              className="full"
              onChange={(e) => {
                contactHandler(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Phone</label>
            <br />
            <input
              type="text"
              name="Phone"
              className="half"
              onChange={(e) => {
                contactHandler(e);
              }}
            />
          </div>
          <div className="green-button center-div" onClick={submitContact}>
            SAVE & CONTINUE
          </div>
          <div className="back center-div">
            <MdOutlineArrowBackIosNew />
            Back
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Contact;
