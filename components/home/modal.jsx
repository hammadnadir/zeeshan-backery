import React from 'react'
import { useState } from 'react'
import { Modal, Button } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function ModalCom() {

  const value = typeof localStorage !== "undefined" && localStorage.getItem("discount") || false;
  const showed = JSON.parse(value)

  const valueNew = typeof localStorage !== "undefined" && localStorage.getItem("users") || false;
  const showedNew = JSON.parse(valueNew)

  const { show } = useSelector(state => state.home)

  const [modal1Visible, setModal1Visible] = useState(showed);
  const [abcd, setAbcd] = useState(showedNew);
  
  const handleClose = () => {
    setModal1Visible(false)
  }
  useEffect(() => {
    localStorage.setItem("users", abcd)
  }, [abcd]);

  useEffect(() => {
    localStorage.setItem("discount", modal1Visible)
  }, [modal1Visible]);

  useEffect(() => {
    if (!show && !abcd ) {
      setTimeout(() => {
        setModal1Visible(true)
        setAbcd(true);
      }, 4000)
    }
  }, [show]);

  return (
    <div>
      <div>
        {/* <Button type="primary" onClick={() => setModal1Visible(true)}>
          Display a modal dialog at 20px to Top
        </Button> */}
        <Modal
          footer={null}
          style={{ padding: 0 }}
          // title="20px to Top"
          visible={modal1Visible}
          //   onOk={() => setModal1Visible(false)}
          // onCancel={() => setModal1Visible(false)}
          centered

        >
          <div className="bg-[url('/page/1.jpg')]  bg-cover bg-center box ">
            <div className='flex justify-end p-5' onClick={handleClose}>
              <img className='cursor-pointer' src="/page/cross.svg" alt="" />
            </div>
            <div className='py-5'>

              <div className='flex justify-center '>
                <img className='w-[150px] ' src="/images/logo.png"  alt="" />

              </div>
              <div class="">
                <h4 className='text-center mt-4 text-[24px] font-bold'>Get 50% Discount</h4>
                <h5 className='text-center font-semibold text-[18px]'>YOUR FIRST ORDER</h5>
                <p className='text-center text-[15px] pb-5'>For the next 24 hours you can get <br /> any product at half-price.</p>


              </div>
            </div>
          </div>

        </Modal>
      </div>
    </div>
  )
}

export default ModalCom