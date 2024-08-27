import { IReferral } from "@/types/referral.user.student.types";

export const modelReferralDataToChart = (users: IReferral[]) => {
  const chartData = [
    {
      name: "January",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "February",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "March",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "April",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "May",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "June",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "July",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "August",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "September",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "October",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "November",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
    {
      name: "December",
      totalReferrals: 0,
      matchedReferrals: 0,
      uniqueReferrers: new Set<string>(),
      uniqueReferrersCount: 0,
      conversionRate: 0,
    },
  ];

  users?.forEach((user) => {
    const monthIndex = new Date(user?.createdAt).getMonth(); // Get the month index

    // Update total referrals for the month
    chartData[monthIndex].totalReferrals += 1;

    // Update matched referrals for the month if applicable
    if (user?.isMatched) {
      chartData[monthIndex].matchedReferrals += 1;
    }

    // Add the referrer to the set of unique referrers
    chartData[monthIndex]?.uniqueReferrers.add(user.referredBy);
  });

  // Convert uniqueReferrers Set to count (number of unique referrers) and calculate conversion rate
  chartData?.forEach((month) => {
    month.uniqueReferrersCount = month.uniqueReferrers.size; // Store the size of the set
    month.conversionRate =
      month.totalReferrals > 0
        ? parseFloat(
            ((month.matchedReferrals / month.totalReferrals) * 100).toFixed(2)
          ) // Calculate conversion rate as a percentage
        : 0;
  });

  return chartData;
};
