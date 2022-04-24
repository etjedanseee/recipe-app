import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import './ui.scss'
import { editName } from '../redux/actions/auth'
import copyIcon from '../assets/icons/copy.png'
import acceptIcon from '../assets/icons/accept.png'
import { Image } from 'antd'

const EditName = ({ oldName, setIsEdit }) => {
  const [text, setText] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  const bodyRef = useRef()
  const inputRef = useRef()

  const dispatch = useDispatch()

  const onInputChange = (e) => {
    setText(e.target.value)
  }

  const onEditClose = (e) => {
    if (!bodyRef.current.contains(e.target)) {
      setIsEdit(false)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (text && text !== oldName) {
      dispatch(editName(text))
    }
    setIsEdit(false)
  }
  const onCopyName = () => {
    navigator.clipboard.writeText(oldName)
    setIsCopied(true)
    inputRef.current.focus()
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className='edit' onClick={onEditClose}>
      <div className="edit__body" ref={bodyRef}>
        <div className='edit__old' onClick={onCopyName}>
          <div className='edit__name'>Old: <span>{oldName}</span></div>

          {isCopied
            ? <Image src={acceptIcon} width='2rem' preview={false} />
            : <Image src={copyIcon} width='2rem' preview={false} />
          }
        </div>
        <form
          className='edit__form form-edit'
          onSubmit={onSubmit}
        >
          <div className="form-edit__input">
            <input
              ref={inputRef}
              type="text"
              value={text}
              onChange={onInputChange}
            />
          </div>
          <div className="form-edit__btn">
            <button>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditName