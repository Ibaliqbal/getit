"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { templates } from "@/utils/template";
import {
  User,
  Settings,
  CreditCard,
  Download,
  Heart,
  Bell,
  Mail,
  Shield,
  LogOut,
  Edit,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "/placeholder.svg?height=100&width=100",
    memberSince: "January 2023",
    plan: "Pro",
    downloads: 12,
    favorites: 5,
  };

  // Mock purchase history
  const purchaseHistory = [
    {
      id: "INV-001",
      date: "2024-03-15",
      template: templates[0],
      amount: templates[0].price,
      status: "Completed",
    },
    {
      id: "INV-002",
      date: "2024-02-28",
      template: templates[2],
      amount: templates[2].price,
      status: "Completed",
    },
    {
      id: "INV-003",
      date: "2024-01-10",
      template: templates[4],
      amount: templates[4].price,
      status: "Completed",
    },
  ];

  // Mock favorite templates
  const favoriteTemplates = [
    templates[1],
    templates[3],
    templates[5],
    templates[7],
    templates[9],
  ];

  const handleLogout = () => {
    setIsLoading(true);

    // Simulate logout process
    setTimeout(() => {
      router.push("/logout");
    }, 1000);
  };

  return (
    <main className="flex-1 py-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
          {/* Profile sidebar */}
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-3 p-6 border rounded-lg bg-background/50">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-background">
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background shadow-sm"
                >
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Change avatar</span>
                </Button>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-primary" />
                <span>Member since {user.memberSince}</span>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted/50 px-4 py-3">
                <h3 className="font-medium">Navigation</h3>
              </div>
              <div className="p-2">
                <nav className="grid gap-1">
                  <Link
                    href="#account"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md bg-primary/10 text-primary"
                  >
                    <User className="h-4 w-4" />
                    <span>Account</span>
                  </Link>
                  <Link
                    href="#purchases"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>Purchases</span>
                  </Link>
                  <Link
                    href="#favorites"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                    <span>Favorites</span>
                  </Link>
                  <Link
                    href="#billing"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    <CreditCard className="h-4 w-4" />
                    <span>Billing</span>
                  </Link>
                  <Link
                    href="#settings"
                    className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </nav>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full text-muted-foreground"
              onClick={handleLogout}
              disabled={isLoading}
            >
              <LogOut className="mr-2 h-4 w-4" />
              {isLoading ? "Logging out..." : "Log out"}
            </Button>
          </div>

          {/* Main content */}
          <div className="space-y-8">
            <Tabs defaultValue="account">
              <TabsList className="grid grid-cols-4 md:grid-cols-5 mb-6">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="purchases">Purchases</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="settings" className="hidden md:inline-flex">
                  Settings
                </TabsTrigger>
              </TabsList>

              {/* Account Tab */}
              <TabsContent value="account" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" defaultValue="Alex" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" defaultValue="Johnson" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue={user.email}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Summary</CardTitle>
                    <CardDescription>
                      Overview of your account activity.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg bg-background/50">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-primary/10">
                            <Download className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold">
                              {user.downloads}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Downloads
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg bg-background/50">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-primary/10">
                            <Heart className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold">
                              {user.favorites}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Favorites
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg bg-background/50">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-primary/10">
                            <CreditCard className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="text-2xl font-bold mr-2">
                                Pro
                              </span>
                              <Badge variant="secondary" className="text-xs">
                                Active
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Current Plan
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Purchases Tab */}
              <TabsContent value="purchases" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Purchase History</CardTitle>
                    <CardDescription>
                      View your template purchases and downloads.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {purchaseHistory.map((purchase) => (
                        <div
                          key={purchase.id}
                          className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg"
                        >
                          <div className="w-full md:w-24 h-16 bg-muted rounded-md overflow-hidden">
                            <Image
                              src={
                                purchase.template.image || "/placeholder.svg"
                              }
                              alt={purchase.template.name}
                              width={100}
                              height={60}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <div>
                                <h4 className="font-medium">
                                  {purchase.template.name}
                                </h4>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <span>Order #{purchase.id}</span>
                                  <span>•</span>
                                  <span>
                                    {new Date(
                                      purchase.date
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Badge variant="outline" className="text-xs">
                                  {purchase.status}
                                </Badge>
                                <div className="font-medium">
                                  ${purchase.amount}
                                </div>
                              </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <Button size="sm" variant="outline">
                                <Download className="mr-2 h-3 w-3" />
                                Download
                              </Button>
                              <Button size="sm" variant="outline">
                                View Invoice
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Favorites Tab */}
              <TabsContent value="favorites" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Favorite Templates</CardTitle>
                    <CardDescription>
                      Templates you've saved for later.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {favoriteTemplates.map((template) => (
                        <div
                          key={template.id}
                          className="flex gap-4 p-4 border rounded-lg"
                        >
                          <div className="w-16 h-16 bg-muted rounded-md overflow-hidden">
                            <Image
                              src={template.image || "/placeholder.svg"}
                              alt={template.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium">{template.name}</h4>
                                <div className="text-sm text-muted-foreground">
                                  {template.category}
                                </div>
                              </div>
                              <div className="font-medium">
                                ${template.price}
                              </div>
                            </div>
                            <div className="mt-2 flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 px-2 text-xs"
                              >
                                View
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-8 px-2 text-xs"
                              >
                                Buy Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Tab */}
              <TabsContent value="billing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Subscription Plan</CardTitle>
                    <CardDescription>
                      Manage your subscription and billing details.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-4 border rounded-lg bg-primary/5">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold">Pro Plan</h3>
                            <Badge>Current</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Access to all premium templates and features
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">
                            $19.99
                            <span className="text-sm font-normal text-muted-foreground">
                              /month
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Renews on April 15, 2024
                          </div>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Unlimited template downloads</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Priority support</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Early access to new templates</span>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Button>Manage Subscription</Button>
                        <Button variant="outline">View Plans</Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Payment Method
                      </h3>
                      <div className="p-4 border rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-muted rounded">
                            <svg
                              className="h-6 w-6"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                x="3"
                                y="5"
                                width="18"
                                height="14"
                                rx="2"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                              <path
                                d="M3 10H21"
                                stroke="currentColor"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">
                              •••• •••• •••• 4242
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Expires 12/2025
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Update
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Billing History
                      </h3>
                      <div className="border rounded-lg overflow-hidden">
                        <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 text-sm font-medium">
                          <div>Date</div>
                          <div>Amount</div>
                          <div className="text-right">Invoice</div>
                        </div>
                        <div className="divide-y">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="grid grid-cols-3 gap-4 p-4 text-sm"
                            >
                              <div className="flex items-center gap-2">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <span>
                                  {new Date(
                                    2024,
                                    3 - i,
                                    15
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                              <div>$19.99</div>
                              <div className="text-right">
                                <Button
                                  variant="link"
                                  size="sm"
                                  className="h-auto p-0"
                                >
                                  Download
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                      Manage how you receive notifications.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Bell className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-medium">New template alerts</div>
                          <div className="text-sm text-muted-foreground">
                            Get notified when new templates are added
                          </div>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-medium">Email notifications</div>
                          <div className="text-sm text-muted-foreground">
                            Receive emails about your account activity
                          </div>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <CreditCard className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-medium">Billing updates</div>
                          <div className="text-sm text-muted-foreground">
                            Get notified about billing and subscription updates
                          </div>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Security</CardTitle>
                    <CardDescription>
                      Manage your account security settings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-medium">
                            Two-factor authentication
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium mb-2">Change password</h3>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">
                            Current password
                          </Label>
                          <Input id="current-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-password">New password</Label>
                          <Input id="new-password" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirm-password">
                            Confirm new password
                          </Label>
                          <Input id="confirm-password" type="password" />
                        </div>
                        <Button>Update password</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Danger Zone</CardTitle>
                    <CardDescription>
                      Irreversible account actions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                      <h3 className="font-medium text-destructive mb-2">
                        Delete account
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Once you delete your account, there is no going back.
                        All your data will be permanently removed.
                      </p>
                      <Button variant="destructive">Delete account</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}
