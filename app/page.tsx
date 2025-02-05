"use client"

import { useState } from "react"
import Image from "next/image"
import { Upload } from 'lucide-react'
import { VehicleDetails } from "@/types/vehicle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faBicycle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Bicycle from "@/components/bicycle"

export default function VehicleSupportForm() {
  const [vehicle] = useState<VehicleDetails>({
    identifier: "892365_38",
    name: "Bring S - 001",
    formatId: "Bring S - 001",
    hub: "Berlin",
    contractId: "A2401-1",
    contractType: "Operational lease",
    customer: "Deliverybike Den Bosch",
    location: "Afrikalaan 17-a, 5232BD's Hertogenbosch",
  })

  const [servere, setServere] = useState<Boolean>(true);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <header className="flex flex-wrap items-center justify-between bg-white p-4 rounded-lg shadow-sm gap-4 sm:gap-0">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Image
              src="/logo.png"
              alt="Papaya Logo"
              width={30}
              height={30}
            />
            <span className="font-medium">DELIVERYBIKE LOGO</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <button className="text-sm hover:bg-gray-100 px-3 py-2 rounded-md">
              Submit ticket
            </button>
          </div>
        </header>

        <section className="bg-white rounded-lg shadow-sm">
          <div className="p-6 flex justify-between flex-wrap items-center border-b gap-5">
            <div className="flex flex-wrap gap-5">
              <Image
                src="/bicycle.png"
                alt="Vehicle"
                width={100}
                height={55}
                className="self-center"
              />
              <div className="flex flex-col space-y-1">
                <div className="text-sm">
                  <span className="text-gray-500">Identifier:</span> <label className="font-bold">{vehicle.identifier}</label>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Name:</span> {vehicle.name}
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Format Id:</span> {vehicle.formatId}
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Hub:</span> {vehicle.hub}
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="text-sm">
                  <span className="text-gray-500">Contract ID:</span> {vehicle.contractId}
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Contract type:</span> {vehicle.contractType}
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Customer:</span> {vehicle.customer}
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Location:</span> {vehicle.location}
                </div>
              </div>
            </div>
            <button className="px-2.5 py-1.5 self-center justify-self-end border rounded-md hover:bg-gray-50">
              Change Vehicle
            </button>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <div className="text-sm text-gray-500 mb-6">User Details</div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 rounded-md border-none outline-none ring-1 ring-gray-400 transition-all duration-300 hover:ring-orange-400 focus:ring-2 focus:ring-orange-400"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 rounded-md border-none outline-none ring-1 ring-gray-400 transition-all duration-300 hover:ring-orange-400 focus:ring-2 focus:ring-orange-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm">
          <div className="p-6 space-y-8">
            <h2 className="text-lg font-semibold mb-2">Ticket</h2>
            <label className="text-base font-medium">How servere is the image?</label>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <label
                  className="relative flex flex-col items-center p-5 border-none ring-1 ring-gray-400 rounded-lg cursor-pointer transition-all duration-300 hover:ring-orange-400 [&:has(input:checked)]:ring-4 [&:has(input:checked)]:ring-orange-500"
                >
                  <input
                    className="appearance-none forced-colors:appearance-auto"
                    type="radio"
                    name="themes"
                    onChange={() => setServere(true)}
                  />
                  <FontAwesomeIcon icon={faBicycle} className="fas fa-1x text-red-500"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faCheckCircle} className={`${!servere && 'hidden'} absolute left-4 fas fa-1x text-red-500`}></FontAwesomeIcon>
                  <span className="mt-3 text-sm font-light">Ruleable</span>
                </label>
                <label
                  className="relative flex flex-col items-center p-5 border-none ring-1 ring-gray-400 rounded-lg cursor-pointer transition-all duration-300 hover:ring-orange-400 [&:has(input:checked)]:ring-4 [&:has(input:checked)]:ring-orange-500"
                >
                  <input
                    className="appearance-none forced-colors:appearance-auto"
                    type="radio"
                    name="themes"
                    onChange={() => setServere(false)}
                  />
                  <FontAwesomeIcon icon={faWrench} className="fas fa-1x text-red-500"></FontAwesomeIcon>
                  <FontAwesomeIcon icon={faCheckCircle} className={`${servere && 'hidden'} absolute left-4 fas fa-1x text-red-500`}></FontAwesomeIcon>
                  <span className="mt-3 text-sm font-light">Out of Service</span>
                </label>
              </div>
            </div>

            <div className="space-y-6">
              <label htmlFor="Select the damaged parts" className="text-base font-medium">Select the damaged parts</label>
              <Bicycle></Bicycle>
            </div>

            <div className="space-y-6">
              <label htmlFor="Did the bike have an accident?" className="text-base font-medium">Did the bike have an accident?</label>
              <input
                id="customer"
                type="text"
                className="w-full px-3 py-2 rounded-md border-none outline-none ring-1 ring-gray-400 transition-all duration-300 hover:ring-orange-400 focus:ring-2 focus:ring-orange-400"
                placeholder="Customer"
              />
            </div>

            <div className="space-y-6">
              <label htmlFor="description" className="text-base font-medium">Description</label>
              <textarea
                id="description"
                className="w-full min-h-[120px] px-3 py-2 rounded-md border-none outline-none ring-1 ring-gray-400 transition-all duration-300 hover:ring-orange-400 focus:ring-2 focus:ring-orange-400"
                placeholder="Description of issue or action"
              ></textarea>
            </div>

            <div className="space-y-6">
              <label htmlFor="location" className="text-base font-medium">Current location of the vehicle</label>
              <input
                id="location"
                type="text"
                className="w-full px-3 py-2 rounded-md border-none outline-none ring-1 ring-gray-400 transition-all duration-300 hover:ring-orange-400 focus:ring-2 focus:ring-orange-400"
                placeholder="Enter current location"
              />
            </div>

            <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-4">
              <div className="flex justify-center">
                <Upload className="h-8 w-8 text-gray-400" />
              </div>
              <div>
                <p className="font-medium">
                  Choose files or drag and drop them here.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Office Docs, PDFs, and images are supported up to 50MB. 1GB for
                  videos.
                </p>
              </div>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
                Browse files
              </button>
            </div>
          </div>
        </section>

        <button
          className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition duration-200"
        >
          Submit
        </button>
      </div >
    </div >
  )
}