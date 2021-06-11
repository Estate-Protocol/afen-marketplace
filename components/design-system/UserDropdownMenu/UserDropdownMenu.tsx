import { Popover, Transition } from "@headlessui/react";
import { DuplicateIcon, UserCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { Dispatch, Fragment, SetStateAction } from "react";
import { copyToClipboard } from "utils/misc";
import { userLinks } from "../../../constants/links";
import { FcCheckmark } from "react-icons/fc";
import Text from "../Text";
import Image from "next/image";

interface UserDropdownMenuProps {
  data: {
    displayName?: string;
    account: string;
    balance: string;
    profileImage?: string;
  };
  walletAddressIsCopied?: boolean;
  onCopyWalletAddress: Dispatch<SetStateAction<boolean>>;
}

export default function UserDropdownMenu({
  data,
  walletAddressIsCopied,
  onCopyWalletAddress,
}: UserDropdownMenuProps) {
  return (
    <div className="px-4 inline-block">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
            group bg-orange-700 px-3 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <p>{data.account?.substring(0, 2)}</p>
              <div className="ml-2">
                {data.profileImage ? (
                  <Image
                    src={data.profileImage}
                    width="30"
                    height="30"
                    className="rounded-full"
                  />
                ) : (
                  <UserCircleIcon
                    className={`${
                      open ? "" : "text-opacity-70"
                    } h-8 w-8 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                    aria-hidden="true"
                  />
                )}
              </div>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-60 max-w-sm px-4 mt-3 transform right-1 sm:px-0 lg:max-w-3x">
                <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-ellipsis">
                  <div className="p-7 border-b bg-afen-blue-light border-gray-700">
                    <div className="flex mb-5">
                      <Text truncate textWidth="w-24 lg:w-48">
                        {data.account}
                      </Text>
                      {walletAddressIsCopied ? (
                        <FcCheckmark className="ml-2 h-5 w-5" />
                      ) : (
                        <DuplicateIcon
                          onClick={() =>
                            copyToClipboard(data.account, onCopyWalletAddress)
                          }
                          className={`${
                            open ? "" : "text-opacity-70"
                          } ml-2 h-5 w-5 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    <div className="flex items-center px-2 pt-2 -m-3 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <div className="ml-2">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {data.balance}{" "}
                          <span className="text-gray-600">ETH</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-afen-blue-light px-2 py-2">
                    {userLinks.map((item) => (
                      <Link href={item.href}>
                        <a
                          key={item.label}
                          className="flex items-center p-2 mb-2 transition duration-150 ease-in-out rounded-lg hover:bg-afen-blue-lighter focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="ml-2">
                            <p className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                              {item.label}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
