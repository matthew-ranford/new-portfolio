'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react'
import { titan } from '@/fonts'
import { ChangeEvent, FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleFormInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFormMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleEmailSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, message } = formData

    if (!name || !email || !message) {
      console.log('Please fill in all fields')
      return
    }

    const templateParams = {
      name: name,
      email: email,
      message: message,
    }

    emailjs.init('3F64Uwf82y_srndD5')
    emailjs
      .send(
        'service_matthew-website',
        'template_matthew-website',
        templateParams
      )
      .then((response) => {
        console.log('Form submitted successfully:', response)
        alert('Form submitted successfully')
        setFormData({
          name: '',
          email: '',
          message: '',
        })
      })
      .catch((error) => {
        console.error('Error submitting form:', error)
        alert('Failed to submit form, please try again later')
      })
  }

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        closeButton: 'right-1 dark:hover:bg-[#66045f] hover:bg-[#004aad]',
        body: 'px-6',
        base: 'my-6 max-w-2xl 6xl:max-w-5xl max-h-fit my-auto drop-shadow-[5px_5px_0px_#1c1917]',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 pt-2 text-2xl">
              <div className={titan.className}>Contact Me</div>
            </ModalHeader>
            <ModalBody>
              <p>
                Have a project in mind or want to discuss potential
                collaboration? I&apos;d love to hear from you!
              </p>
              <form onSubmit={handleEmailSubmit} className="space-y-4 pt-2">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border rounded"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleFormInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleFormInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border rounded"
                    placeholder="Your Message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleFormMessageChange}
                  />
                </div>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" type="submit">
                    Send Message
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
