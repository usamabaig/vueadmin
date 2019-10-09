import adAccountRepository from "./adAccountRepositotry";
import UserRepository from "./UserRepository";

const repositories = {
    adAccount: adAccountRepository,
    userLogin: UserRepository,
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
