import { HardhatRuntimeEnvironment } from "hardhat/types";
import { network } from "hardhat";

export default async ({
  getNamedAccounts,
  deployments,
}: HardhatRuntimeEnvironment) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
};
