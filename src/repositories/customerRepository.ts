import { Address, Customer } from '@prisma/client';
import { prisma } from '../database.js';

type CustomerType = Omit<Customer, 'id'>;
type AddressType = Omit<Address, 'id'>;

export async function newCustomer({ customer, address }: { customer: CustomerType; address: AddressType }) {
  const promisse = await prisma.$transaction(async (prisma) => {
    const { id: addressId } = await prisma.address.create({
      data: address,
    });
    const data = await prisma.customer.create({
      data: {
        ...customer,
        addressId,
      },
    });

    return data;
  });

  return promisse;
}
