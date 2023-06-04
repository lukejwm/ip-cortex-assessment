// For now, users are to be captured using simple interface and eventually would be converted into DTO/DAO when
// DB is implemented as this part would be reading from a DB (maybe updating it)

// TODO: startPoint, destinationPoints and requiredPoints would all need some validation to ensure that
//  all points specified actually exist! Initial assumption is that UI only provides users only with options that
//  do exist

export interface User {
    userId: string;
    startPoint: string;
    destinationPoint: string;
    requiredPoints: string[];
    costLimit: number;
}
