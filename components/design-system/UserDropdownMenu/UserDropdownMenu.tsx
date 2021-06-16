import { Popover, Transition } from "@headlessui/react";
import { DuplicateIcon, UserCircleIcon } from "@heroicons/react/solid";
import { Dispatch, Fragment, SetStateAction } from "react";
import { copyToClipboard } from "utils/misc";
import { userLinks } from "../../../constants/links";
import { FcCheckmark } from "react-icons/fc";
import Text from "../Text";
import Image from "next/image";
import Button from "../Button";
import { UserDetails } from "@/components/User";
import Link from "next/link";

interface UserDropdownMenuProps {
  data: UserDetails;
  walletAddressIsCopied?: boolean;
  onCopyWalletAddress: Dispatch<SetStateAction<boolean>>;
  onDisconnectWallet: Dispatch<SetStateAction<void>>;
}

export default function UserDropdownMenu({
  data,
  walletAddressIsCopied,
  onCopyWalletAddress,
  onDisconnectWallet,
}: UserDropdownMenuProps) {
  return (
    <div className="inline-block">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className={`focus:outline-none`}>
              {data.user?.avatar ? (
                <div className="relative h-8 w-8 mt-1 shadow-md overflow-hidden rounded-full">
                  <Image src={data.user.avatar} layout="fill" />
                </div>
              ) : (
                <UserCircleIcon
                  className={`${
                    open ? "" : "text-opacity-70"
                  } h-8 w-8 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden="true"
                />
              )}
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
              <Popover.Panel className="absolute z-10 w-82 max-w-sm px-4 mt-2 transform right-0 sm:px-0 lg:max-w-3x">
                <div className="overflow-hidden rounded-md py-2 bg-white dark:bg-afen-blue shadow-xl ring-1 ring-black ring-opacity-5 overflow-ellipsis">
                  <div className="px-5 py-4 border-b dark:border-gray-700">
                    <Text sub size="x-small">
                      Wallet
                    </Text>
                    <div className="flex mb-1.5">
                      <Text bold truncate textWidth="w-24 lg:w-48">
                        {data.address}
                      </Text>
                      {walletAddressIsCopied ? (
                        <FcCheckmark className="ml-2 h-5 w-5" />
                      ) : (
                        <DuplicateIcon
                          onClick={() =>
                            copyToClipboard(data.address, onCopyWalletAddress)
                          }
                          className={`${
                            open ? "" : "text-opacity-70"
                          } ml-2 h-5 w-5 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="mt-3">
                      <Text sub size="x-small">
                        Balance
                      </Text>
                      <Text bold>
                        {data.balance}{" "}
                        <span className="text-sm text-gray-600">ETH</span>
                      </Text>
                    </div>
                  </div>

                  <div className="relative px-5 py-3">
                    {userLinks.map((item, index) => (
                      <div key={index}>
                        <Link href={item.href}>
                          <Text style="mb-3 cursor-pointer">{item.label}</Text>
                        </Link>
                      </div>
                    ))}
                    <Button
                      type="plain"
                      style="py-0"
                      onClick={onDisconnectWallet}
                    >
                      <Text style="font-normal">Disconnect</Text>
                    </Button>
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
