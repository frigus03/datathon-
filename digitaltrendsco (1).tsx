"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Zap, Users, Monitor, PieChart, DollarSign } from "lucide-react"

// Define the structure for campaign data
interface CampaignData {
  objective: string
  targetAudience: string
  platform: string
  contentType: string
  budget: number
}

// Define the structure for campaign results
interface CampaignResult {
  predictedReach: number
  estimatedROI: number
  suggestedContent: string[]
}

export default function DigitalMarketingCampaign() {
  // State for storing campaign data
  const [campaignData, setCampaignData] = useState<CampaignData>({
    objective: "",
    targetAudience: "",
    platform: "",
    contentType: "",
    budget: 0,
  })
  // State for managing loading status
  const [loading, setLoading] = useState(false)
  // State for storing campaign results
  const [result, setResult] = useState<CampaignResult | null>(null)

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // Generate mock result
      const simulatedResult: CampaignResult = {
        predictedReach: Math.floor(Math.random() * 1000000),
        estimatedROI: Number.parseFloat((Math.random() * 5).toFixed(2)),
        suggestedContent: [
          "Trending tech news video",
          "Interactive product showcase",
          "User-generated content campaign",
        ],
      }
      setResult(simulatedResult)
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  // Handle input changes for text and number inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCampaignData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle changes for select inputs
  const handleSelectChange = (name: string, value: string) => {
    setCampaignData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    // Main container with gradient background
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
      {/* White container for main content */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          {/* Page title with gradient text effect */}
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Digital Trends Co.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Marketing Campaign
            </span>
          </h1>
          {/* Campaign details form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Campaign Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Campaign objective input */}
                <div className="flex items-center space-x-4">
                  <Zap className="text-yellow-500" />
                  <Input
                    name="objective"
                    value={campaignData.objective}
                    onChange={handleInputChange}
                    placeholder="Campaign Objective"
                    className="flex-grow"
                    required
                  />
                </div>
                {/* Target audience input */}
                <div className="flex items-center space-x-4">
                  <Users className="text-blue-500" />
                  <Input
                    name="targetAudience"
                    value={campaignData.targetAudience}
                    onChange={handleInputChange}
                    placeholder="Target Audience"
                    className="flex-grow"
                    required
                  />
                </div>
                {/* Platform selection */}
                <div className="flex items-center space-x-4">
                  <Monitor className="text-green-500" />
                  <Select onValueChange={(value) => handleSelectChange("platform", value)}>
                    <SelectTrigger className="flex-grow">
                      <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Content type selection */}
                <div className="flex items-center space-x-4">
                  <PieChart className="text-orange-500" />
                  <Select onValueChange={(value) => handleSelectChange("contentType", value)}>
                    <SelectTrigger className="flex-grow">
                      <SelectValue placeholder="Select Content Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="image">Image</SelectItem>
                      <SelectItem value="carousel">Carousel</SelectItem>
                      <SelectItem value="story">Story</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Budget input */}
                <div className="flex items-center space-x-4">
                  <DollarSign className="text-green-500" />
                  <Input
                    name="budget"
                    type="number"
                    value={campaignData.budget}
                    onChange={handleInputChange}
                    placeholder="Budget (USD)"
                    className="flex-grow"
                    required
                  />
                </div>
              </CardContent>
            </Card>
            {/* Submit button with loading state */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Generate Campaign Insights"
              )}
            </Button>
          </form>

          {/* Display campaign results if available */}
          {result && (
            <Card className="mt-8 border-2 border-pink-200 hover:border-pink-400 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-600">Campaign Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Display predicted reach */}
                  <div className="flex items-center justify-between bg-purple-100 p-4 rounded-lg">
                    <span className="font-semibold text-purple-700">Predicted Reach:</span>
                    <span className="text-lg font-bold text-purple-800">
                      {result.predictedReach.toLocaleString()} users
                    </span>
                  </div>
                  {/* Display estimated ROI */}
                  <div className="flex items-center justify-between bg-pink-100 p-4 rounded-lg">
                    <span className="font-semibold text-pink-700">Estimated ROI:</span>
                    <span className="text-lg font-bold text-pink-800">{result.estimatedROI}x</span>
                  </div>
                  {/* Display suggested content */}
                  <div className="bg-orange-100 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-700 mb-2">Suggested Content:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {result.suggestedContent.map((content, index) => (
                        <li key={index} className="text-orange-800">
                          {content}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

