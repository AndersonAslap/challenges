namespace Chat.API.Models;

public class Message
{
    public string MessageId { get; set; }
    public string Username { get; set; }
    public string DateSend { get; set; }
    public string Content { get; set; }
}
