import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Smartphone,
  Wallet as WalletIcon,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  Download,
  CreditCard,
  Building,
  Smartphone as PhoneIcon,
  AlertCircle,
  CheckCircle,
  Clock,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const Wallet = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("this_month");
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [withdrawalMethod, setWithdrawalMethod] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  // Mock wallet data
  const walletData = {
    balance: 47500,
    pendingEarnings: 15000,
    totalEarned: 125000,
    totalWithdrawn: 77500,
    thisMonthEarnings: 28000,
    averageJobValue: 12500,
  };

  // Mock transaction history
  const transactions = [
    {
      id: 1,
      type: "earning",
      amount: 25000,
      description: "Logo design for TechCorp Solutions",
      date: "2024-01-20",
      status: "completed",
      client: "TechCorp Solutions",
      jobId: "JOB-001",
    },
    {
      id: 2,
      type: "withdrawal",
      amount: -20000,
      description: "Bank transfer withdrawal",
      date: "2024-01-18",
      status: "completed",
      method: "Bank Transfer",
      reference: "WD-20240118-001",
    },
    {
      id: 3,
      type: "earning",
      amount: 16000,
      description: "Mathematics tutoring sessions",
      date: "2024-01-15",
      status: "completed",
      client: "Mrs. Adebayo",
      jobId: "JOB-002",
    },
    {
      id: 4,
      type: "earning",
      amount: 30000,
      description: "Social media content creation",
      date: "2024-01-10",
      status: "pending",
      client: "Bella Fashion House",
      jobId: "JOB-003",
    },
    {
      id: 5,
      type: "withdrawal",
      amount: -15000,
      description: "Mobile money withdrawal",
      date: "2024-01-08",
      status: "completed",
      method: "Mobile Money",
      reference: "WD-20240108-002",
    },
    {
      id: 6,
      type: "earning",
      amount: 75000,
      description: "University graduation event planning",
      date: "2024-01-05",
      status: "completed",
      client: "Federal University of Technology",
      jobId: "JOB-004",
    },
  ];

  // Mock withdrawal methods
  const withdrawalMethods = [
    {
      id: "bank_transfer",
      name: "Bank Transfer",
      icon: <Building className="h-5 w-5" />,
      processingTime: "1-2 business days",
      fee: "₦50",
      minAmount: 1000,
      description: "Direct transfer to your Nigerian bank account",
    },
    {
      id: "mobile_money",
      name: "Mobile Money",
      icon: <PhoneIcon className="h-5 w-5" />,
      processingTime: "Instant",
      fee: "₦25",
      minAmount: 500,
      description: "Transfer to your mobile money wallet",
    },
    {
      id: "card",
      name: "Debit Card",
      icon: <CreditCard className="h-5 w-5" />,
      processingTime: "Instant",
      fee: "₦100",
      minAmount: 1000,
      description: "Direct to your debit card",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "failed":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const handleWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Withdrawal request:", { withdrawalMethod, withdrawalAmount });
    setShowWithdrawForm(false);
    setWithdrawalAmount("");
    setWithdrawalMethod("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Student Hub
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setShowWithdrawForm(true)}
                className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
              >
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Withdraw Funds
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wallet</h1>
          <p className="text-gray-600">
            Manage your earnings and withdraw funds to your preferred account
          </p>
        </div>

        {/* Wallet Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Available Balance</p>
                  <p className="text-3xl font-bold">
                    ₦{walletData.balance.toLocaleString()}
                  </p>
                </div>
                <WalletIcon className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Pending Earnings</p>
                  <p className="text-2xl font-bold">
                    ₦{walletData.pendingEarnings.toLocaleString()}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">Total Earned</p>
                  <p className="text-2xl font-bold">
                    ₦{walletData.totalEarned.toLocaleString()}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">This Month</p>
                  <p className="text-2xl font-bold">
                    ₦{walletData.thisMonthEarnings.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                onClick={() => setShowWithdrawForm(true)}
                className="h-20 flex flex-col items-center justify-center space-y-2"
              >
                <ArrowUpRight className="h-6 w-6" />
                <span>Withdraw Funds</span>
              </Button>

              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
              >
                <Download className="h-6 w-6" />
                <span>Download Statement</span>
              </Button>

              <Button
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
              >
                <Plus className="h-6 w-6" />
                <span>Add Payment Method</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Withdrawal Form Modal */}
        {showWithdrawForm && (
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle>Withdraw Funds</CardTitle>
              <CardDescription>
                Choose your preferred withdrawal method and amount
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWithdrawal} className="space-y-6">
                <div className="space-y-2">
                  <Label>Withdrawal Method</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {withdrawalMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => setWithdrawalMethod(method.id)}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          withdrawalMethod === method.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          {method.icon}
                          <span className="font-medium">{method.name}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {method.description}
                        </p>
                        <div className="text-xs text-gray-500">
                          <p>Processing: {method.processingTime}</p>
                          <p>Fee: {method.fee}</p>
                          <p>Min: ₦{method.minAmount.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {withdrawalMethod && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Withdrawal Amount (₦)</Label>
                      <Input
                        id="amount"
                        type="number"
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(e.target.value)}
                        placeholder="Enter amount"
                        max={walletData.balance}
                        required
                      />
                      <p className="text-sm text-gray-500">
                        Available: ₦{walletData.balance.toLocaleString()}
                      </p>
                    </div>

                    {withdrawalMethod === "bank_transfer" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Bank</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your bank" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gtb">GTBank</SelectItem>
                              <SelectItem value="firstbank">
                                First Bank
                              </SelectItem>
                              <SelectItem value="uba">UBA</SelectItem>
                              <SelectItem value="zenith">
                                Zenith Bank
                              </SelectItem>
                              <SelectItem value="access">
                                Access Bank
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Account Number</Label>
                          <Input placeholder="Enter account number" />
                        </div>
                        <div className="space-y-2">
                          <Label>Account Name</Label>
                          <Input placeholder="Account holder name" />
                        </div>
                      </div>
                    )}

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-yellow-800">
                            Important:
                          </p>
                          <ul className="text-yellow-700 mt-1 space-y-1">
                            <li>
                              • Withdrawals are processed during business hours
                            </li>
                            <li>
                              • Ensure your details are correct to avoid delays
                            </li>
                            <li>
                              • You'll receive a confirmation email once
                              processed
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button type="submit" className="flex-1">
                        Confirm Withdrawal
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowWithdrawForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        )}

        {/* Transaction History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>
                View all your earnings and withdrawals
              </CardDescription>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this_week">This Week</SelectItem>
                  <SelectItem value="this_month">This Month</SelectItem>
                  <SelectItem value="last_3_months">Last 3 Months</SelectItem>
                  <SelectItem value="all_time">All Time</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 rounded-full ${
                        transaction.type === "earning"
                          ? "bg-green-100"
                          : "bg-blue-100"
                      }`}
                    >
                      {transaction.type === "earning" ? (
                        <ArrowDownRight
                          className={`h-4 w-4 ${
                            transaction.type === "earning"
                              ? "text-green-600"
                              : "text-blue-600"
                          }`}
                        />
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-blue-600" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">
                        {transaction.description}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>
                          {new Date(transaction.date).toLocaleDateString()}
                        </span>
                        {transaction.client && (
                          <>
                            <span>•</span>
                            <span>{transaction.client}</span>
                          </>
                        )}
                        {transaction.method && (
                          <>
                            <span>•</span>
                            <span>{transaction.method}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p
                        className={`font-semibold ${
                          transaction.amount > 0
                            ? "text-green-600"
                            : "text-gray-900"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}₦
                        {Math.abs(transaction.amount).toLocaleString()}
                      </p>
                      <Badge className={getStatusColor(transaction.status)}>
                        {getStatusIcon(transaction.status)}
                        <span className="ml-1 capitalize">
                          {transaction.status}
                        </span>
                      </Badge>
                    </div>

                    <Button variant="ghost" size="icon">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Wallet;
